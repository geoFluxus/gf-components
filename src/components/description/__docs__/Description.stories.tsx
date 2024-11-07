import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Typography/Description",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const SingleColumn: Story = {
  args: {
    text: [
        'Als onderdeel van het strategisch ontwikkelingsplan 2019-2023 heeft de gemeente Zaanstad afgesproken om een regionale grondstoffenstrategie te ontwikkelen en uit te voeren in lijn met de landelijke ambities Circulaire Economie. Dit dashboard is een eerste poging om te monitoren hoe ver de gemeente is op weg om de gestelde doelen te halen. Het dashboard verzamelt, integreert en analyseert de verschillende beschikbare databronnen en geeft inzichten volgens de vier onderwerpen:',
        'Overzicht: een algemeen overzicht en evenwicht tussen de goederen die in de gemeentelijke economie circuleren en het geproduceerde afval.',
        'Materialen: welke materialen en bijbehorende kenmerken vinden we in de gemeente terug.',
        'Doelen en vooruitgang: hoe goed scoort de gemeente in het licht van de nationaal geformuleerde doelstellingen.',
        'Handelingsperspectieven: De mogelijkheden met het grootste effect om de nationale en lokale doelen te behalen.',
        'Deze monitor Circulaire Economie geeft inzicht in de huidige stand van kennis over materialen in de gemeente. Het geeft een overzicht van welke informatie kan worden gevonden en afgeleid uit de beschikbare informatiebronnen, terwijl tegelijkertijd de lacunes worden blootgelegd. Door middel van de laatste (wetenschappelijke) inzichten en nieuwe gegevens, zal deze monitor blijvend verbeterd, verfijnd en uitgebreid worden.'
    ],
  },
};

export const TwoColumns: Story = {
  args: {
    text: [
        'Als onderdeel van het strategisch ontwikkelingsplan 2019-2023 heeft de gemeente Zaanstad afgesproken om een regionale grondstoffenstrategie te ontwikkelen en uit te voeren in lijn met de landelijke ambities Circulaire Economie. Dit dashboard is een eerste poging om te monitoren hoe ver de gemeente is op weg om de gestelde doelen te halen. Het dashboard verzamelt, integreert en analyseert de verschillende beschikbare databronnen en geeft inzichten volgens de vier onderwerpen:',
        'Overzicht: een algemeen overzicht en evenwicht tussen de goederen die in de gemeentelijke economie circuleren en het geproduceerde afval.',
        'Materialen: welke materialen en bijbehorende kenmerken vinden we in de gemeente terug.',
        'Doelen en vooruitgang: hoe goed scoort de gemeente in het licht van de nationaal geformuleerde doelstellingen.',
        'Handelingsperspectieven: De mogelijkheden met het grootste effect om de nationale en lokale doelen te behalen.',
        'Deze monitor Circulaire Economie geeft inzicht in de huidige stand van kennis over materialen in de gemeente. Het geeft een overzicht van welke informatie kan worden gevonden en afgeleid uit de beschikbare informatiebronnen, terwijl tegelijkertijd de lacunes worden blootgelegd. Door middel van de laatste (wetenschappelijke) inzichten en nieuwe gegevens, zal deze monitor blijvend verbeterd, verfijnd en uitgebreid worden.'
    ],
    columns: 2,
  },
};

export const ThreeColumns: Story = {
  args: {
    text: [
        'Als onderdeel van het strategisch ontwikkelingsplan 2019-2023 heeft de gemeente Zaanstad afgesproken om een regionale grondstoffenstrategie te ontwikkelen en uit te voeren in lijn met de landelijke ambities Circulaire Economie. Dit dashboard is een eerste poging om te monitoren hoe ver de gemeente is op weg om de gestelde doelen te halen. Het dashboard verzamelt, integreert en analyseert de verschillende beschikbare databronnen en geeft inzichten volgens de vier onderwerpen:',
        'Overzicht: een algemeen overzicht en evenwicht tussen de goederen die in de gemeentelijke economie circuleren en het geproduceerde afval.',
        'Materialen: welke materialen en bijbehorende kenmerken vinden we in de gemeente terug.',
        'Doelen en vooruitgang: hoe goed scoort de gemeente in het licht van de nationaal geformuleerde doelstellingen.',
        'Handelingsperspectieven: De mogelijkheden met het grootste effect om de nationale en lokale doelen te behalen.',
        'Deze monitor Circulaire Economie geeft inzicht in de huidige stand van kennis over materialen in de gemeente. Het geeft een overzicht van welke informatie kan worden gevonden en afgeleid uit de beschikbare informatiebronnen, terwijl tegelijkertijd de lacunes worden blootgelegd. Door middel van de laatste (wetenschappelijke) inzichten en nieuwe gegevens, zal deze monitor blijvend verbeterd, verfijnd en uitgebreid worden.'
    ],
    columns: 3
  },
};

export const FourColumns: Story = {
  args: {
    text: [
        'Als onderdeel van het strategisch ontwikkelingsplan 2019-2023 heeft de gemeente Zaanstad afgesproken om een regionale grondstoffenstrategie te ontwikkelen en uit te voeren in lijn met de landelijke ambities Circulaire Economie. Dit dashboard is een eerste poging om te monitoren hoe ver de gemeente is op weg om de gestelde doelen te halen. Het dashboard verzamelt, integreert en analyseert de verschillende beschikbare databronnen en geeft inzichten volgens de vier onderwerpen:',
        'Overzicht: een algemeen overzicht en evenwicht tussen de goederen die in de gemeentelijke economie circuleren en het geproduceerde afval.',
        'Materialen: welke materialen en bijbehorende kenmerken vinden we in de gemeente terug.',
        'Doelen en vooruitgang: hoe goed scoort de gemeente in het licht van de nationaal geformuleerde doelstellingen.',
        'Handelingsperspectieven: De mogelijkheden met het grootste effect om de nationale en lokale doelen te behalen.',
        'Deze monitor Circulaire Economie geeft inzicht in de huidige stand van kennis over materialen in de gemeente. Het geeft een overzicht van welke informatie kan worden gevonden en afgeleid uit de beschikbare informatiebronnen, terwijl tegelijkertijd de lacunes worden blootgelegd. Door middel van de laatste (wetenschappelijke) inzichten en nieuwe gegevens, zal deze monitor blijvend verbeterd, verfijnd en uitgebreid worden.'
    ],
    columns: 4
  },
};