import Image from "next/image";
import img0109 from "../../public/IMG_0109.png";
import img0212 from "../../public/IMG_0212.png";
import img0606 from "../../public/IMG_0606.png";
import img4692 from "../../public/IMG_4692.png";
import img7668 from "../../public/IMG_7668.png";
import img7680 from "../../public/IMG_7680.png";
import img7817 from "../../public/IMG_7817.png";
import img7824 from "../../public/IMG_7824.png";
import img7827 from "../../public/IMG_7827.png";
import img7995 from "../../public/IMG_7995.png";
import img8060 from "../../public/IMG_8060.png";
import img8182 from "../../public/IMG_8182.png";
import img8194 from "../../public/IMG_8194.png";
import img9131 from "../../public/IMG_9131.png";
import img9237 from "../../public/IMG_9237.png";
import img9252 from "../../public/IMG_9252.png";

export default function Portfolio() {
	return (
		<div>
			<p>This is where images will go</p>
			<div className="grid grid-cols-2 gap-2">
				<div>
					<Image src={img0109} alt="" />
					<Image src={img0212} alt="" />
					<Image src={img0606} alt="" />
					<Image src={img4692} alt="" />
					<Image src={img7668} alt="" />
					<Image src={img7680} alt="" />
					<Image src={img7817} alt="" />
					<Image src={img7824} alt="" />
				</div>
				<div>
					<Image src={img7827} alt="" />
					<Image src={img7995} alt="" />
					<Image src={img8060} alt="" />
					<Image src={img8182} alt="" />
					<Image src={img8194} alt="" />
					<Image src={img9131} alt="" />
					<Image src={img9237} alt="" />
					<Image src={img9252} alt="" />
				</div>
			</div>
		</div>
	);
}
