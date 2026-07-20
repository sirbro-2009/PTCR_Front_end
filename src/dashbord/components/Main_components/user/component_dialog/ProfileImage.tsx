import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Dialog_comp from "./Dialog_comp";
import { useState ,useContext} from "react";
import { Upload } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { Provider } from "@/hooks/Provide";
import { Label } from "@/components/ui/label";
import type { IProvider } from "@/hooks/Provide"

export function ProfileImage() {
  const [image, setImage] = useState<File|undefined>(undefined);
  const {t} = useTranslation()
  const {setReady} = useContext(Provider) as IProvider
  return (
    <Dialog_comp edit_type="Profile_image">
      <Field>
        <h1 className="text-xl">{t(`auth.Profile_image`)}</h1>
      
        <div className="relative size-25 cursor-pointer flex items-center justify-center border-2 border-dashed rounded-lg">
          <Upload className="size-8 " />
              <Input
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              name="profile_picture"
              accept="image/*"
              type="file"
              onChange={(e) => {
                
              const file = e.target.files![0]
              const type = file!.type.match(/image/)
              const sizeInMB = (file!.size / (1024 * 1024))<=5
              if(sizeInMB && type){
                setImage(file)
                setReady(true)
              }
              else{
                setReady(false)
              }
             }}/>
        </div>
        <Label>{t(`dashboard.imgLabel`)}</Label>
      </Field>
    </Dialog_comp>
  );
}
