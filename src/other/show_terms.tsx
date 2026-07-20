import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
export default function ShowTerms({ props }:any) {
  const { t } = useTranslation();
  const [setShowTerms,showTerms] = props;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/20 backdrop-blur-sm">
      <Alert
        variant="destructive"
        className="max-w-md shadow-lg text-center animate-in fade-in zoom-in-95 duration-200">
        <AlertCircleIcon className="h-4 w-4 text-center" />
        <AlertTitle>{t(`auth.terms-title`)}</AlertTitle>
        <AlertDescription className={`text-center`}>{t(`footer.privacy`)}</AlertDescription>
        <Button
          className="w-full"
          onClick={() => {
            setShowTerms({...showTerms,show:false});
          }}>
          {t(`auth.agree`)}
        </Button>
      </Alert>
    </div>
  );
}
