interface ButtonProps {
  title: string;
}

function MyButton(props: ButtonProps) {
  const {title, ...rest} = props;

  return (
    <a
      href="#"
      className="group relative m-1 inline-flex cursor-pointer items-center justify-center rounded border-b-4 border-l-2 border-purple-700 bg-gradient-to-tr from-purple-600 to-purple-500 px-3.5 py-2 text-white shadow-lg active:border-purple-600 active:shadow-none"
      {...rest}
    >
      <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
      <span className="relative">{title}</span>
    </a>
  );
}

export default MyButton;
