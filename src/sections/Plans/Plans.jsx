import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import PlanCard from "@/components/PlanCard";

const Plans = () => {

  return (
    <Section
      titile="Choose the plan that's right for you"
      titleId="plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    >
      <Grid columns={3}>
        <PlanCard />
      </Grid>
    </Section>
  )
}

export default Plans