import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import useCheckin from "./useCheckin";
import useSettings from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [paid, setPaid] = useState(false);
  const [addBreakfast, setBreakfast] = useState(false);

  const { booking = {}, isLoading } = useBooking();
  const { settings, isLoading: isSettings } = useSettings();

  const { checkin, isLoading: isChecking } = useCheckin();

  useEffect(() => setPaid(booking.isPaid ?? false), [booking.isPaid]);

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfast = settings?.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!paid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfast,
          totalPrice: totalPrice + optionalBreakfast,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {hasBreakfast || (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setBreakfast((add) => !add);
              setPaid(false);
            }}
            disabled={isSettings || addBreakfast}
          >
            would like to add breakfast for {formatCurrency(optionalBreakfast)}
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={paid}
          onChange={setPaid.bind(null, !paid)}
          disabled={paid || isChecking}
        >
          I confirm that {guests.fullName} has paid the total amount of
          {addBreakfast
            ? formatCurrency(totalPrice + optionalBreakfast)
            : formatCurrency(totalPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!paid || isChecking}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
