import { NextResponse } from 'next/server';
import { isValidEmail, sendSubmission } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const { goal, serviceInterest, companySize, name, email, message, source } = await request.json();

        if (!goal || !name || !isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Goal, name, and a valid email are required.' },
                { status: 400 }
            );
        }

        await sendSubmission({
            heading: 'New Consultation Request',
            subject: `New Consultation Request — ${serviceInterest || 'General'} — ${name}`,
            name,
            email,
            rows: [
                ['Name', name],
                ['Email', email],
                ['Service Area', serviceInterest || 'General'],
                ['Primary Goal', goal],
                ['Company Size', companySize || 'Not specified'],
                ['Source', source || 'Not specified'],
                ['Message', message || 'No additional message'],
            ],
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Consultation form error:', error);
        return NextResponse.json(
            { error: 'Failed to send request. Please try again or email contact@mindssparc.com.' },
            { status: 500 }
        );
    }
}
