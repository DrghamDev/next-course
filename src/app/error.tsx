"use client";

interface Props {
  error : Error;
  retry : () => void;
}

const ErrorPage = ({ error, retry } : Props) => {
  console.log(error);

  return (
    <div>
      <p className="text-base">Something went wrong try again later!!</p>
      <button type="button" className="btn" onClick={() => retry()}>RETRY</button>
    </div>
  )
}

export default ErrorPage