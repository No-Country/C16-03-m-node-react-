function TextLanding({
  titulo = "Tu Solución en Envíos",
  parrafo = `En Go Courier, entendemos la importancia de tus envíos. Por eso, nos comprometemos a ofrecerte más que un simple servicio de paquetería. Con un enfoque dedicado en la facilidad, la eficiencia y la rapidez, puedes confiar en nosotros para un transporte seguro y conveniente, ya sea local o nacional. ¡Simplifica tus envíos y confía en Go Courier para una experiencia sin complicaciones!`,
  titleColor = "text-green",
  textColor = "text-white",
  variant = "default",
}) {
  let defaultH1 = "";
  let defaultP = "";

  if (variant === "default") {
    // defaultH1 = `text-lg sm:text-xl text-center ms:text-left ${textColor} font-bold`;
    defaultH1 = `text-lg sm:text-xl text-center ms:text-left ${titleColor} font-bold`;
    defaultP = `text-sm sm:text-md text-center ms:text-left ${textColor}`;
  }

  if (variant === "form") {
    // defaultH1 = `text-lg text-center ${textColor} font-bold`;
    defaultH1 = `text-lg text-center ${titleColor}  font-bold`;
    defaultP = ` text-center ${textColor}`;
  }

  return (
    <div className="flex flex-col gap-2 w-full h-auto ">
      <h1 className={defaultH1}>{titulo}</h1>

      <p className={defaultP}>{parrafo}</p>
    </div>
  );
}

export default TextLanding;
