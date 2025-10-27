import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  ArrowUpRight,
  Briefcase,
  Star,
  ImagePlus,
  Images,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const photoSources = [
  "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?w=400",
  "https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=400",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
  "https://images.unsplash.com/photo-1617381519460-d87050ddeb92?w=400",
  "https://images.unsplash.com/photo-1681510957110-35e250010450?w=400",
];

export default function App() {
  const [galleryImages, setGalleryImages] = useState([
    photoSources[0],
    photoSources[1],
    photoSources[2],
  ]);

  const addImage = () => {
    const availableImages = photoSources.filter(
      (img) => !galleryImages.includes(img),
    );

    if (availableImages.length > 0) {
      const randomImage =
        availableImages[
          Math.floor(Math.random() * availableImages.length)
        ];
      setGalleryImages([...galleryImages, randomImage]);
    } else {
      // If all preset images are used, add a random one from the existing pool
      const randomImage =
        photoSources[
          Math.floor(Math.random() * photoSources.length)
        ];
      setGalleryImages([...galleryImages, randomImage]);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left half - empty on desktop, hidden on mobile */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-muted/20 to-muted/40" />

      {/* Right half - full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
        <div className="max-w-2xl w-full space-y-6">
          {/* Widget 1 - Tabbed Profile Card */}
          <Card className="shadow-sm border">
            <div className="border-b px-6 pt-6">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50">
                  <TabsTrigger
                    value="about"
                    className="px-4 py-2.5 rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    About Me
                  </TabsTrigger>
                  <TabsTrigger
                    value="experiences"
                    className="px-4 py-2.5 rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    Experiences
                  </TabsTrigger>
                  <TabsTrigger
                    value="recommended"
                    className="px-4 py-2.5 rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    Recommended
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="about"
                  className="px-6 pb-6 pt-6 mt-0 space-y-6"
                >
                  <div className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      Hello! I'm Dave, your sales rep here from
                      Salesforce. I've been working at this
                      awesome company for 3 years now.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      I was born and raised in Albany, NY & have
                      been living in Santa Carla for the past 10
                      years with my wife Tiffany and my 4 year
                      old twin daughters - Emma and Ella. Both
                      of them are just starting school, so my
                      calendar is usually blocked between 9-10
                      AM. This is a...
                    </p>
                  </div>
                </TabsContent>

                <TabsContent
                  value="experiences"
                  className="px-6 pb-6 pt-6 mt-0 space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="size-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground">
                          Senior Frontend Developer
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Tech Company Inc.
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          2022 - Present
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="size-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <Briefcase className="size-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground">
                          Frontend Developer
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Digital Agency Ltd.
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          2020 - 2022
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="size-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Briefcase className="size-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground">
                          Junior Developer
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Startup Co.
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          2018 - 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="recommended"
                  className="px-6 pb-6 pt-6 mt-0 space-y-4"
                >
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-medium text-foreground">
                          Advanced React Patterns
                        </h4>
                        <Star className="size-4 text-yellow-500 fill-yellow-500 shrink-0" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Master advanced React patterns and best
                        practices for scalable applications.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-medium text-foreground">
                          TypeScript Deep Dive
                        </h4>
                        <Star className="size-4 text-yellow-500 fill-yellow-500 shrink-0" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Take your TypeScript skills to the next
                        level with advanced type systems.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          {/* Widget 2 - Gallery Card */}
          <Card className="shadow-sm border">
            <div className="px-6 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle>Gallery</CardTitle>
                  <CardDescription className="mt-1.5">
                    My photo collection
                  </CardDescription>
                </div>
                <Button
                  size="sm"
                  className="shrink-0 shadow-sm"
                >
                  <ImagePlus className="size-4 mr-2" />
                  Add Image
                </Button>
              </div>
            </div>
            <div className="px-6 pb-6 pt-4 space-y-4">
              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-muted shadow-sm ring-1 ring-black/5"
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="size-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Add Image Button */}
              <Button
                onClick={addImage}
                variant="outline"
                className="w-full border-dashed border-2 h-12 hover:bg-muted/50 transition-colors"
              >
                <ImagePlus className="size-5 mr-2" />
                Add Image
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}