'use client';

export default function VerifyEmailPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Verify Your Email</h2>
        <p className="text-center text-gray-600">
          A confirmation email has been sent to your email address. Please check your inbox and click the link to verify your email.
        </p>
        <p className="text-center text-gray-600 mt-4">
          After verification, you can log in.
        </p>
      </div>
    </section>
  );
}
