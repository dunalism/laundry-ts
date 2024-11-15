function AvatarUsers() {
  return (
    <div className="flex gap-2">
      <div className="avatar">
        <div className={`w-10 rounded-2xl`}>
          <img
            src="https://api.dicebear.com/9.x/notionists/svg?seed=dunalism&backgroundColor=d1d4f9&size=200"
            alt="dunalism"
          />
        </div>
      </div>
      <div className="flex flex-col relative prose ">
        <h4 className="relative bottom-1">Hamdika AlKahfi</h4>
        <p className="absolute top-4">Owner</p>
      </div>
    </div>
  );
}

export default AvatarUsers;
