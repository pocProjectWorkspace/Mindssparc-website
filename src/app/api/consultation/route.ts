import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { goal, serviceInterest, companySize, name, email, message } = await request.json();

        if (!goal || !name || !email) {
            return NextResponse.json(
                { error: 'Goal, name, and email are required.' },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: 'MindsSparc Website <noreply@mindssparc.com>',
            to: 'contact@mindssparc.com',
            replyTo: email,
            subject: `New Consultation Request — ${serviceInterest} — ${name}`,
            html: `
                <h2>New Consultation Request</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Service Area</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${serviceInterest}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Primary Goal</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${goal}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Company Size</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${companySize || 'Not specified'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${message || 'No additional message'}</td>
                    </tr>
                </table>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Consultation form error:', error);
        return NextResponse.json(
            { error: 'Failed to send request. Please try again.' },
            { status: 500 }
        );
    }
}
