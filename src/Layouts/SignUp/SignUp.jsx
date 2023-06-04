import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const SignUp = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  const { signUpWithEmail, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const form = useRef()
  console.log(form);
  const onSubmit = data => {
   const {email, password, name, photo} = data;
    setError("");
    signUpWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        const saveUser = {name, email};
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
              "content-type": "application/json"
            },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
          })
          form.current.reset()
        logOut();
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up to create your account
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              ref={form}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <h3 className="text-base text-green-500"></h3>
              <h3 className="text-base text-red-600">{error}</h3>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                {errors.name && <span>Name field is required</span>}
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                {errors.email && <span>Email field is required</span>}
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                {errors.password && <span>Password field is required</span>}
                <input
                  type="password"
                  {...register("password", { required: true })}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary1 focus:border-primary2 block w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Photo URL
                </label>
                {errors.photo && <span>Photo field is required</span>}
                <input
                  type="url"
                  {...register("photo", { required: true })}
                  id="photo"
                  placeholder="Your Photo URL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary2 hover:bg-primary1 focus:ring-4 focus:outline-none focus:ring-primary2 focus:border-primary2 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary2 hover:underline "
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
