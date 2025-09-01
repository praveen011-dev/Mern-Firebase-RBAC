import React from "react";

const Fotter = () => {
  return (
    <footer class="w-full bg-gray-100 text-center py-4 text-md text-gray-500">
      🛠️ Made with <span class="text-red-500">❤️</span> by
      <span class="font-semibold text-indigo-600">Praveen</span> 🚀
      <a
        href="https://x.com/intent/follow?screen_name=PalPraveen011"
        onclick="openFollowPopup(event)"
        class="text-blue-600 hover:underline"
      >
        Follow me on X
      </a>
    </footer>
  );
};

export default Fotter;
