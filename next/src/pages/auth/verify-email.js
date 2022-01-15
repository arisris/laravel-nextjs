import AuthLayout from "@/components/Layouts/Auth"
import { Button, Card, Preloader } from "konsta/react"
import { useState } from "react"
import { useAuth } from "@/hooks/auth"

export default function PageVerifyEmail() {
  const [status, setStatus] = useState("")
  const { resendEmailVerification, logout, user } = useAuth({
    middleware: "auth",
  })
  return (
    <AuthLayout title={"Verify Email"}>
      <Card className="min-w-[320px] sm:w-[480px] p-2 relative">
        {user ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Thanks for signing up! Before getting started, could you verify
              your email address by clicking on the link we just emailed to you?
              If you didn't receive the email, we will gladly send you another.
            </div>

            {status == "verification-link-sent" && (
              <div className="mb-4 font-medium text-sm text-green-600">
                A new verification link has been sent to the email address you
                provided during registration.
              </div>
            )}
            <div className="mt-4 flex flex-col gap-4 items-center justify-between">
              <Button onClick={() => resendEmailVerification({ setStatus })}>
                Resend Verification Email
              </Button>

              <button
                type="button"
                className="underline text-sm text-gray-600 hover:text-gray-900"
                onClick={logout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <Preloader color="primary" />
            <div>Checking session</div>
          </div>
        )}
      </Card>
    </AuthLayout>
  )
}
