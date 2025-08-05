
import { Button } from "@/components/ui/button";

const ButtonTextChange = () => {
  return (
    <Button
      className="group bg-gradient-to-r from-[#1aa153] hover:from-[#1aa153]/90 hover:to-green-500/90 text-white border-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300  h-10"
      type="button"
    >
      <span className="relative inline-flex overflow-hidden">
        <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
          Book a call
        </span>
        <span className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          Book a call
        </span>
      </span>
    </Button>
  );
};

export default ButtonTextChange;
