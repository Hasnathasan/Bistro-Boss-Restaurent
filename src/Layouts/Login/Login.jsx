/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const {loginWithEmail} = useContext(AuthContext);
  const captcahRef = useRef(null)
  const [disable, setDisable] = useState(true)
  useEffect( () => {
    loadCaptchaEnginge(6); 
  },[]);

  const handleCaptcha = () => {
    const inputCaptcah = captcahRef.current.value;
    console.log(inputCaptcah);
    if(validateCaptcha(inputCaptcah)){
      setDisable(false)
      alert("Captcha Matched")
    }
    else{
      alert("Captcha code unmatched")
    }
  }


    const handleLogin = event => {
      event.preventDefault()
        const form = event.target;
        const email = form.email;
        const password = form.password;
        console.log(email, password);
        loginWithEmail(email, password)
          .then(result => console.log(result.user))
          .catch(error => console.log(error))
    }
    return (
        <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="flex gap-3 items-center">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]">
            TurboDrive
          </span>
        </div>

        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
              {/* <h3 className="text-base text-red-600">{error}</h3> */}
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary1 "
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary1 hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <div>
              <LoadCanvasTemplate />
              <input
                  type="text"
                  name="captcha"
                  id="captcha"
                  ref={captcahRef}
                  placeholder="Enter Captcha code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary1 focus:border-primary2 block w-full p-2.5 "
                  required
                />
                <span onClick={handleCaptcha} className="btn btn-block btn-xs">Match</span>
              </div>
              <button
                className={`w-full ${disable ? "bg-slate-400 hover:bg-slate-500" : ""} text-white bg-primary2 hover:bg-primary1 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                disabled={disable}
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary1 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
            <h4 className="text-center text-primary1 font-semibold text-lg my-0">or</h4>
            <hr />
              <button
            //   onClick={handleGoogleSignIn}
                type="button"
                className="w-full text-white bg-primary2 hover:bg-primary1/90 focus:ring-4 focus:outline-none focus:ring-primary2/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 mb-2"
              >
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;