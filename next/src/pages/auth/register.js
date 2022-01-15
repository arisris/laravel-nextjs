import TextInput from "@/components/Form/Input"
import AuthLayout from "@/components/Layouts/Auth"
import AuthValidationErrors from "@/components/Layouts/Auth/ValidationErrors"
import { useAuth } from "@/hooks/auth"
import { Button, Card, Preloader } from "konsta/react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function PageRegister() {
  const [errors, setErrors] = useState("")
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  })

  const { register: registerUser, user } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  })
  return (
    <AuthLayout title={"Register"}>
      <Card className="min-w-[320px] sm:min-w-[480px] p-2">
        {user ? (
          <div className="text-center">
            <Preloader color="primary" />
            <div>Checking session</div>
          </div>
        ) : (
          <>
            <AuthValidationErrors className="mb-4" errors={errors} />
            <form
              method="POST"
              action=""
              onSubmit={handleSubmit(data =>
                registerUser({ ...data, setErrors }),
              )}>
              <TextInput
                type="username"
                label="Name"
                className="my-4"
                autoComplete="new-username"
                {...register("name", { required: true })}
              />
              <TextInput
                type="email"
                label="Email"
                className="mb-4"
                autoComplete="new-email"
                {...register("email", { required: true })}
              />
              <TextInput
                type="password"
                name="password"
                label="Password"
                className="mb-4"
                autoComplete="new-password"
                {...register("password", { required: true })}
              />
              <TextInput
                type="password"
                label="Confirm Password"
                className="mb-4"
                autoComplete="new-password"
                {...register("password_confirmation", { required: true })}
              />
              <div className="grid grid-cols-2 items-center mb-4 text-sm">
                <div>
                  <Link href="/auth/login">
                    <a className="text-primary hover:underline font-bold">
                      Login
                    </a>
                  </Link>
                </div>
                <Button
                  raised
                  type="submit"
                  className="bg-primary text-white text-center p-2">
                  Register
                </Button>
              </div>
            </form>
          </>
        )}
      </Card>
    </AuthLayout>
  )
}
