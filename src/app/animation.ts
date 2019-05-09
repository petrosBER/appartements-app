import {
  trigger,
  animateChild,
  transition,
  animate,
  style,
  query,
  state,
  animation
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("ListPage => DetailsPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-300px", opacity: 0 })]),
    query(":leave", animateChild()),
    query(":leave", [
      animate("300ms ease-in-out", style({ left: "300px", opacity: 0 }))
    ]),
    query(":enter", [
      animate("300ms ease-in-out", style({ left: "0px", opacity: 1 }))
    ]),
    query(":enter", animateChild())
  ]),
  transition("DetailsPage => ListPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ right: "-300px", opacity: 0 })]),
    query(":leave", animateChild()),
    query(":leave", [
      animate("300ms ease-in-out", style({ right: "300px", opacity: 0 }))
    ]),
    query(":enter", [
      animate("300ms ease-in-out", style({ right: "0px", opacity: 1 }))
    ]),
    query(":enter", animateChild())
  ])
]);

export const fadeIn = animation([
  state(
    "fadeIn",
    style({
      opacity: "{{opacity}}",
      transform: "{{transform}}"
    })
  ),
  animate("300ms ease-out")
]);
