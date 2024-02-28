export default function ImgSkill({ name }) {
    return (
        <img src={name} alt={name}
            className="lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-32 2xl:h-32 
        grayscale absolute bg-zinc-700 lg:p-2 2xl:p-4 
        rounded-xl" />
    );
}