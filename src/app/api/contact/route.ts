import { NextResponse } from 'next/server';
import { isValidEmail, sendSubmission } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, message } = await request.json();

        if (!firstName || !isValidEmail(email) || !message) {
            return NextResponse.json(
                { error: 'First name, a valid email, and message are required.' },
                { status: 400 }
            );
        }

        const name = `${firstName} ${lastName || ''}`.trim();

        await sendSubmission({
            heading: 'New Contact Form Submission',
            subject: `New Contact Inquiry from ${name}`,
            name,
            email,
            rows: [
                ['Name', name],
                ['Email', email],
                ['Source', 'Contact page'],
                ['Message', message],
            ],
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again or email contact@mindssparc.com.' },
            { status: 500 }
        );
    }
}
