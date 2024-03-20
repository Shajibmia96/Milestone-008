import { Link, useNavigate, useRouteError } from "react-router-dom";

const FountErrors = () => {
    const errors = useRouteError()
    console.log(errors)

    const navigate = useNavigate()

    const handlesGoHome = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Oops Sorry</h1>
            <p>
                {
                    errors.statusText || errors.message
                }
            </p>

            {
               errors.status === 404 && <div>
                   <h1>The pase not fount</h1>
                   <button onClick={handlesGoHome}>GO Back</button>
                   <Link to='/'> Go Home</Link>
               </div>
            }
        </div>
    );
};

export default FountErrors;