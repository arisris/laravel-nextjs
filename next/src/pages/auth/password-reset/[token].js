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
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  })
  const { resetPassword, user } = useAuth({
    middleware: "guest",
  })
  const router = useRouter()
  useEffect(() => {
    setValue("email", router.query.email || "")
  }, [router.query.email])
  return (
    <AuthLayout title={"Login"}>
      <Card className="min-w-[320px] sm:min-w-[480px] p-2 relative">
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
                resetPassword({ ...data, setErrors, setStatus }),
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
              <TextInput
                type="password"
                label="Confirm Password"
                className="mb-4"
                {...register("password_confirmation", { required: true })}
              />
              <div className="flex items-center mb-4 text-sm">
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
