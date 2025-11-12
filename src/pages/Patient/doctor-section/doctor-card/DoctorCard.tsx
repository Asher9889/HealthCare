import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { specialists } from "@/constants/data";



export default function DoctorInfo() {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="mx-auto mb-10 max-w-2xl space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Meet Our Specialists
        </h2>
        <p className="text-muted-foreground text-sm">
          Experienced surgeons providing the highest quality care.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {specialists.map((doc) => (
          <DoctorCard key={doc.name} {...doc} />
        ))}
      </div>
    </section>
  );
}



interface Specialist {
  name: string;
  specialties: string[];
  experience: string;
  phone?: string;
  happyPatients: string;
  imageUrl: string;
}

function DoctorCard({
  name,
  specialties,
  experience,
//   phone,
  happyPatients,
  imageUrl,
}: Specialist) {
  return (
    <Card className="group overflow-hidden rounded-0 border shadow-sm transition hover:shadow-md">
      
          <img
            src={imageUrl}
            alt={name}
          className="-mt-6 h-60 w-full object-cover transition group-hover:scale-[1.03]"
        />
      
      <CardContent className="space-y-4 p-5">
        <h3 className="text-xl font-semibold">{name}</h3>

        <div className="flex flex-wrap gap-2">
          {specialties.map((item, i) => (
            <Badge key={i} variant="secondary" className="rounded-full">
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Experience: {experience}</span>
          <span>Patients: {happyPatients}</span>
        </div>

        {/* {phone ? (
          <Button size="sm" className="w-full">
            Call Now
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="w-full">
            View Profile
          </Button>
        )} */}
      </CardContent>
    </Card>
  );
}
