interface PersonCardProps {
  name: string;
  role: string;
  contact: string;
  imageSrc: string;
}

export default function PersonCard({ name, role, contact, imageSrc }: PersonCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-32 h-32 rounded-full p-1 bg-secondary mb-4 shadow-md">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover rounded-full border-2 border-background"
        />
      </div>
      <h3 className="font-serif font-bold text-xl text-primary mb-1">{name}</h3>
      <div className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 border border-primary/10">
        {role}
      </div>
      <p className="text-sm text-muted-foreground font-medium">{contact}</p>
    </div>
  );
}