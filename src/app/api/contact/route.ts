import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, message } = await request.json();

        if (!firstName || !email || !message) {
            return NextResponse.json(
                { error: 'First name, email, and message are required.' },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: 'MindsSparc Website <onboarding@resend.dev>',
            to: 'contact@mindssparc.com',
            replyTo: email,
            subject: `New Contact Inquiry from ${firstName} ${lastName || ''}`.trim(),
            html: `
                <h2>New Contact Form Submission</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${firstName} ${lastName || ''}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td>
                        <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${message}</td>
                    </tr>
                </table>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
