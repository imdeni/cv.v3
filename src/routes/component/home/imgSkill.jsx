export default function ImgSkill({ name }) {
    return (
        <img src={name} alt={name} className="w-32 h-32 grayscale absolute bg-zinc-700 p-4 rounded-xl" />
    );
}