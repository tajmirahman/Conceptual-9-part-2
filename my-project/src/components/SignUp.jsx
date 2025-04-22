import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const SignUp = () => {

    const { handleSignup } = useContext(authContext);

    const handleForm = (e) => {
        e.preventDefault();
      
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
      
        console.log("Email:", email); // ✅ check this prints a valid email
      
        handleSignup(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
          })
          .catch(err => console.log(err.message));
      };
      



    return (
        <div className='bg-gray-200 mt-10 w-[300px] mx-auto '>
            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="password" name="password" placeholder="Your Password" required />
                <button type="submit">Sign Up</button>
            </form>

        </div>
    );
};

export default SignUp;