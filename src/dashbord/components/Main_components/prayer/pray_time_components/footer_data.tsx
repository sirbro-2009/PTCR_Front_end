import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Icon from "@/principal_page/components/bar_components/Icon";

export default function Footer_data() {
    const id = 21015
  return (
    <Card className="w-full h-24 p-2 flex flex-row justify-between" dir="ltr">
        <div className="w-40  flex flex-row items-center justify-between">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}&color=0-128-0`}
          alt={`mosque id: ${id}`}
          className="w-20 h-20  rounded-xl outline-4"
                  />        
        <Label>ID {id}</Label>
        </div>
          <div className="lg:flex lg:flex-row  lg:items-center lg:justify-between">
            <br />
            <div>
                <h1 className="font-bold">PTCR</h1>
                <h1 className="text-lg text-Secondary text-center">Ver 3.8.9 </h1>
            </div>
            <br />
            <Icon className={``} />
          </div>
    </Card>
  );
}
///
