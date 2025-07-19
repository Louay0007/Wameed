# <img src="https://raw.githubusercontent.com/github/explore/main/topics/video/video.png" width="32"/> Wameedh: Regional Short Film Festival

![Next.js](https://img.shields.io/badge/Next.js-15.2.3-blue?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.0.0-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)
![Animated UI](https://img.shields.io/badge/Animated-UI-yellow?logo=framer)

---

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2Z2d3Z2b2Z2d3Z2b2Z2d3Z2b2Z2d3Z2b2Z2d3Z2b2Z2d3Z2/giphy.gif" width="400" alt="Animated Film Festival"/>
</p>

## 🎬 About Wameedh

**Wameedh** is a unique regional event and short film festival that brings together creative minds from across the Middle East and North Africa. Participants create and showcase short films that highlight the beauty, culture, and unique details of their home countries.

- 🌍 **Cultural Exchange**: Entries from many MENA countries foster friendly competition and cultural understanding.
- 🎥 **Filmmaking as Art**: Promote, market, and introduce each country through authentic stories and visuals.
- 🤝 **Ambassadors of Culture**: Empower participants to become storytellers and cultural ambassadors.

---

## ✨ Animated Home Component

The home page features a **custom animated video player** and a modern, responsive layout:

```tsx
<section className="bg-dark flex justify-center items-center py-12 px-4 md:px-6 relative overflow-hidden animate-fade-in-up">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
    <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1 animate-fade-in delay-100">
      <h2 className="text-3xl md:text-4xl font-bold text-[#BC8940]">Wameedh: About</h2>
      <p>Wameedh is a unique regional event and short film festival...</p>
      <a href="/about-us">
        <button className="bg-[#BC8940] hover:bg-[#A07633] text-white transform transition-transform duration-300 hover:scale-105 active:scale-95">Learn More</button>
      </a>
    </div>
    <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0 transform transition-all duration-500 animate-fade-in-scale delay-200">
      {/* Custom Video Player */}
      <CustomVideoPlayer src="/videos/aboutw.mp4" />
    </div>
  </div>
</section>
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/placeholder/animated-video-player.gif" width="500" alt="Animated Custom Video Player"/>
</p>

---

## 🚀 Tech Stack

- **Next.js 15** & **React 19**
- **Tailwind CSS 4** for utility-first styling
- **Framer Motion** & **tw-animate-css** for smooth animations
- **Radix UI** for accessible components
- **TypeScript** for type safety

---

## 🛠️ Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/wameedh.git
   cd wameedh
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) to view it in your browser.**

---

## 📂 Project Structure

- `components/home/Aboutwameed.tsx` – Home About section with animated video player
- `public/videos/aboutw.mp4` – Festival intro video
- `pages/` – Next.js pages
- `styles/` – Tailwind CSS and global styles

---

## 🙏 Credits

- Inspired by the creative spirit of the MENA region
- Built with ❤️ by the Wameedh team

---

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=BC8940&center=true&vCenter=true&width=435&lines=Lights%2C+Camera%2C+Action!;Celebrate+MENA+Creativity+with+Wameedh"/>
</p>
