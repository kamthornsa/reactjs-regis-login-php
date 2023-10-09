import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export function LoginForm() {
  const navigate = useNavigate();
  const { setTokenAndRole } = useAuth();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 1 ? "กรอกรหัสผ่าน" : null),
    },
  });

  return (
    <Container size={420} my={40}>
      <Title ta={"center"} order={2}>
        เข้าสู่ระบบ
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          <NavLink to={"/register"}>Create account</NavLink>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              const response = await axios.post(
                "http://localhost/phpapi/auth.php",
                {
                  email: values.email,
                  password: values.password,
                }
              );
              if (response.data.error) {
                // Handle error messages
                // console.error(response.data.error);
                alert(response.data.error);
              } else {
                setTokenAndRole(response.data.email, response.data.role); // Added role parameter
                navigate("/", { replace: true });
                // alert(response.data.email);
              }
            } catch (error) {
              console.error("An error occurred while logging in:", error);
              alert("An error occurred while logging in.");
            }
          })}
        >
          <TextInput
            label="Email"
            placeholder="you@email.dev"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
