import NameView from "./name"
import IntroView from "./intro"
export default function HomeIntro() {
    return (
        <div id="boxanimated" className="rounded-lg">
            <div className="grid grid-rows-2-[auto]">
                <NameView name="Deni Achmad" job="job_view" />
                <IntroView intro="intro_view" />
            </div>
        </div>
    );
}