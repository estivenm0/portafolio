
function Certification({img, title, date }) {
  return (
    <article className="relative flex flex-col justify-end px-8 pt-40 pb-8 mt-4 overflow-hidden w-80 bg-gray-700/60 isolate rounded-2xl">
    <img src={img} alt="" className="absolute inset-0 object-contain w-full h-full opacity-70"/>

    <h3 className="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
    <div className="z-10 overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">{date}</div>
</article>
  )
}


export default Certification