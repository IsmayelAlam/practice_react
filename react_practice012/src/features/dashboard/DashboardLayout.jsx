import styled from "styled-components";
import useRecentBooking from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBooking();
  const { isLoading: isLoading2, stays, confirmedStays } = useRecentStays();

  if (isLoading1 || isLoading2) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} />
    </StyledDashboardLayout>
  );
}
