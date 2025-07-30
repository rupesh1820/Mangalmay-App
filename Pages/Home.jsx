import MustWatchVideos from "../Components/sections/MustWatchVideos";
import LiveStreaming from "../Components/sections/LiveStreaming";
import AudiosSection from "../Components/sections/AudiosSection";
import PanchangSection from "../Components/sections/PanchangSection";
import ShortsSection from "../Components/sections/ShortsSection";
import BhaktiVideos from "../Components/sections/BhaktiVideos";
import VideosSection from "../Components/sections/VideosSection";
import DepartmentsSection from "../Components/sections/DepartmentsSection";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center">
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4">
          Mangalmay <span className="text-teal-5900">Digital</span>
        </h1>
      </div>

      <MustWatchVideos />
      <LiveStreaming />
      <AudiosSection />
      <PanchangSection />
      <ShortsSection />
      <BhaktiVideos />
      <VideosSection />
      <DepartmentsSection />
    </div>
  );
}
      