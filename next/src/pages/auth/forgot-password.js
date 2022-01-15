import TextInput from "@/components/Form/Input"
import AuthLayout from "@/components/Layouts/Auth"
import Link from "next/link"
import { Button, Card, Preloader } from "konsta/react"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "@/hooks/auth"
import AuthSessionStatus from "@/components/Layouts/Auth/SessionStatus"
import AuthValidationErrors from "@/components/Layouts/Auth/ValidationErrors"

export default function PageForgotPassword() {
  const [status, setStatus] = useState("")
  const [errors, setErrors] = useState("")
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  })
  const { forgotPassword, user } = useAuth({
    middleware: "guest",
  })
  return (
    <AuthLayout title={"Forgot Password"}>
      <Card className="min-w-[320px] sm:w-[480px] p-2 relative">
        {user ? (
          <div className="text-center">
            <Preloader color="primary" />
            <div>Checking session</div>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Forgot your password? No problem. Just let us know your email
              address and we will email you a password reset link that will
              allow you to choose a new one.
            </div>

            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />
            <form
              method="POST"
              action=""
              onSubmit={handleSubmit(data =>
                forgotPassword({ ...data, setErrors, setStatus }),
              )}>
              <TextInput
                type="email"
                label="Email"
                className="mb-4"
                {...register("email", { required: true })}
              />
              <div className="flex items-center mb-4 text-sm">
                <div>
                  {/* <Link href="/auth/register">
                    <a className="text-primary hover:underline font-bold">
                      Sign Up
                    </a>
                  </Link> */}
                </div>
                <Button raised type="submit">
                  Reset Password
                </Button>
              </div>
            </form>
          </>
        )}
      </Card>
    </AuthLayout>
  )
}
