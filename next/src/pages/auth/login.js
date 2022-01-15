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

export default function PageLogin() {
  const [status, setStatus] = useState("")
  const [errors, setErrors] = useState("")
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const { login, user } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  })
  const router = useRouter()
  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length == 0) {
      setStatus(window.atob(router.query.reset))
    } else {
      setStatus(null)
    }
  })
  return (
    <AuthLayout title={"Login"}>
      <Card className="min-w-[320px] sm:w-[480px] p-2 relative">
        {user ? (
          <div className="text-center">
            <Preloader color="primary" />
            <div>Checking session</div>
          </div>
        ) : (
          <>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />
            <form
              method="POST"
              action=""
              onSubmit={handleSubmit(data =>
                login({ ...data, setErrors, setStatus }),
              )}>
              <TextInput
                type="email"
                label="Email"
                className="mb-4"
                {...register("email", { required: true })}
              />
              <TextInput
                type="password"
                label="Password"
                className="mb-4"
                {...register("password", { required: true })}
              />
              <div className="grid grid-cols-2 items-center mb-4 text-sm">
                <div>
                  <Link href="/auth/forgot-password">
                    <a className="text-primary hover:underline font-bold">
                      Forgot Password
                    </a>
                  </Link>
                </div>
                <Button raised type="submit">
                  Login
                </Button>
              </div>
            </form>
          </>
        )}
      </Card>
    </AuthLayout>
  )
}
