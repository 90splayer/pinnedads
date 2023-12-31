import prisma from "@/libs/prismadb";

interface IParams {
   campaignId?: string;
}

export default async function getCampaignById(
  campaignId?: string
) {
  try {

    const campaign = await prisma.campaign.findUnique({
      where: {
        id: campaignId,
      },
      include: {
        user: true,
        links: true,
        adtext: true
      }
    });

    if (!campaign) {
      return null;
    }

    return campaign;

  } catch (error: any) {
    throw new Error(error);
  }
}