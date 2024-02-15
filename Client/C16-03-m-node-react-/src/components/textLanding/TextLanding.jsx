function TextLanding({
  titulo = "Un titulo pegadizo",
  parrafo = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut modi
        doloribus, distinctio corrupti architecto corporis consequuntur
        aspernatur earum voluptates accusantium nemo iure magnam similique
        soluta atque labore et at quis laborum illo. At temporibus cupiditate
        quis laborum voluptatum? Reiciendis, praesentium.`,
  textColor = "text-white",
  variant = "default",
}) {
  let defaultH1 = "";
  let defaultP = "";

  if (variant === "default") {
    defaultH1 = `text-lg sm:text-xl text-center ms:text-left ${textColor} font-bold`;
    defaultP = `text-sm sm:text-md text-center ms:text-left ${textColor}`;
  }

  if (variant === "form") {
    defaultH1 = `text-lg text-center ${textColor} font-bold`;
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
