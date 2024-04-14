import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {VideoCard} from "@/components/videocard";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
export default function Home() {
  return (
    <div>
         <Appbar></Appbar>
         <VideoGrid></VideoGrid>
    </div>
  );
}
