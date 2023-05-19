export const Hero: React.FC = () => {
  return (
    <section className="bg-[#F5E6E0]">
      <div className="m-auto max-w-4xl flex justify-around max-h-full">
        <div className="flex-grow flex justify-center items-center">
          <h2>Sono un titolo</h2>
        </div>
        <img
          src="./public/assets/woman_hero.png"
          alt="hero womand"
          className=" object-contain"
        />
      </div>
    </section>
  )
}
