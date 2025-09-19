import Image from 'next/image';

type TeamMemberCardProps = {
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint: string;
};

const TeamMemberCard = ({ name, role, imageUrl, dataAiHint }: TeamMemberCardProps) => {
  return (
    <div className="group relative w-full h-[450px] overflow-hidden rounded-lg border border-transparent transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
      <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={name}
          data-ai-hint={dataAiHint}
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white">
            <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                <h3 className="font-headline text-3xl font-bold tracking-tight">{name}</h3>
                <div className="w-full h-px bg-gradient-to-r from-primary to-green-400 my-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></div>
                <p className="font-medium text-lg text-primary-foreground/90">{role}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
