import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, drink, preferences } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Boda Jeny & Víctor <onboarding@resend.dev>',
      to: process.env.TO_EMAIL || 'victor.vxg@gmail.com',
      subject: 'Confirmación de asistencia - Boda Jeny & Víctor',
      html: `
        <h2>Nueva confirmación de bebida</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Bebida preferida:</strong> ${drink}</p>
        <p><strong>Preferencias barra libre:</strong> ${preferences}</p>
      `,
    });

    if (error) {
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
