import { useAppSelector } from "@/hooks/Redux";
import PTB from "./multi_use_comps/prayer_time_box";
export default function Five_Prayer_data() {

  const data = useAppSelector((state) => {
    return state.prayer;
  });
  return (
    <div className="mx-auto flex md:flex-row flex-col md:justify-between p-2">
      {data.prayers.map((e, i) => {
        return (
          <PTB
            title={e.title}
            key={i}
            time={e.time}
            icama={e.icama??``}
            is12
            isCurrent={!!e.isCurrent}></PTB>
        );
      })}
    </div>
  );
}
