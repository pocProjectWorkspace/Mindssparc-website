import { Resend } from 'resend';

export const CONTACT_INBOX = 'contact@mindssparc.com';
const FROM = 'MindsSparc <noreply@mindssparc.com>';

export function escapeHtml(value: unknown): string {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export function isValidEmail(email: unknown): email is string {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function detailsTable(rows: [string, string][]) {
    const cells = rows
        .map(([label, value]) => `
            <tr>
                <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">${escapeHtml(label)}</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${escapeHtml(value)}</td>
            </tr>`)
        .join('');
    return `<table style="border-collapse: collapse; width: 100%; max-width: 600px;">${cells}</table>`;
}

interface Submission {
    heading: string;
    subject: string;
    name: string;
    email: string;
    rows: [string, string][];
}

// Sends the submission to the contact inbox, then an acknowledgement to the submitter.
// Resend returns { error } instead of throwing, so both results are checked explicitly.
export async function sendSubmission({ heading, subject, name, email, rows }: Submission) {
    if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not set');
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const notify = await resend.emails.send({
        from: FROM,
        to: CONTACT_INBOX,
        replyTo: email,
        subject,
        html: `<h2>${escapeHtml(heading)}</h2>${detailsTable(rows)}`,
    });
    if (notify.error) {
        throw new Error(`Resend rejected inbox email: ${notify.error.message}`);
    }

    // The inbox copy is what matters; a failed acknowledgement is logged, not surfaced.
    const ack = await resend.emails.send({
        from: FROM,
        to: email,
        replyTo: CONTACT_INBOX,
        subject: 'We have received your message — MindsSparc',
        html: `
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thank you for reaching out to MindsSparc. We have received your message and a member of our team will get back to you within one business day.</p>
            <p>For reference, here is what you sent us:</p>
            ${detailsTable(rows.filter(([label]) => label !== 'Email'))}
            <p>If you need to add anything, simply reply to this email.</p>
            <p>— The MindsSparc Team<br /><a href="https://www.mindssparc.com">www.mindssparc.com</a></p>
        `,
    });
    if (ack.error) {
        console.error('Acknowledgement email failed:', ack.error);
    }
}
