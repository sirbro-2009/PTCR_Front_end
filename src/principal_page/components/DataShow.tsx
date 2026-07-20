import {Card,CardTitle} from "@/components/ui/card"
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import { FaMosque ,FaUsers,FaEye} from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useState ,useEffect} from "react";
import { serverHost } from "@/other/data";

const newData = (v1:number|null,v2:number|null,v3:number|null)=>{
return [
    {
        value:v1,
        enName:"users",

        emoji:FaUsers
    },
    {
        value:v2,
        enName:"mosques",
        emoji:FaMosque
    },
    {
        value:v3,
        enName:"visits",
        emoji:FaEye
    }
]
}
const states= newData(null,null,null)
export function DataShow() {
const {t,i18n} = useTranslation();
const [data,setData] = useState(states)
useEffect(()=>{
fetch(serverHost+"analytics").then((e)=>{
    return e.json()
}).then((e)=>{
    setData(newData(e.users,e.mosques,e.visiotrs))
}).catch(()=>{
    setData(states)
})
},[])
const dir = i18n.language === 'ar' ? 'ltr' : 'rtl'
return (
    <Tabs defaultValue="users" className="mb-20 w-full mt-20" >
        <TabsList className={`w-full flex-row-reverse`}>
            {data.map((e,i)=>{
                
                return (<TabsTrigger value={e.enName} key={i} className={`cursor-pointer text-sm lg:font-bold lg:text-2xl lg:p-4` }>
                    {t(`stats.${e.enName}`)}
                    </TabsTrigger>)
            })}
        </TabsList>
            {data.map((e,i)=>{
                const IconComponent = e.emoji
                return (    <TabsContent value={e.enName} key={i} className={`text-center`}> 
                                <Card className={`text-center`} dir={dir}>
                                    <CardTitle className={`lg:text-4xl text-sm font-['Rubik'] items-center flex flex-row-reverse justify-center  w-1/4 self-center`}>
                                        {t(`stats.${e.enName}`)}
                                    <IconComponent className="h-10 w-10 mx-2 text-primary shrink-0" />
                                        </CardTitle>
                                    <h1 className="text-3xl">{e.value||0}</h1>
                                </Card>
                            </TabsContent>)
            })}
    </Tabs>
  )
}
