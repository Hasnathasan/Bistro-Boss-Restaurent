import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {signUpWithEmail, logOut} = useContext(AuthContext);
    const [error, setError] = useState("")
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError("")
        signUpWithEmail(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                logOut()
                 
            })
            .catch(error => setError(error.message))
    }
    return (
        <div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign up to create your account
              </h1>
              
              <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6" action="#">
                <h3 className="text-base text-green-500"></h3>
                <h3 className="text-base text-red-600">{error}</h3>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary1 focus:border-primary2 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photo"
                    id="photo"
                    placeholder="Your Photo URL"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white bg-primary2 hover:bg-primary1 focus:ring-4 focus:outline-none focus:ring-primary2 focus:border-primary2 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account? {" "}
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