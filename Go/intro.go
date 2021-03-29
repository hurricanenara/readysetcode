package main

import (
	"fmt"
	t "time"
)

func main() {
	fmt.Println("Hello World")
	fmt.Println(t.Now())

	const earthsGravity = 9.80665
	fmt.Println(earthsGravity)

	// this will throw error
	var jellybeanCounter int8 = 100
	fmt.Println(jellybeanCounter)

	// emptyInt an int8
	var emptyInt int8
	// emptyFloat a float32
	var emptyFloat float32
	// and emptyString a string
	var emptyString string
	// Finally, print them all out
	fmt.Println(emptyInt, emptyFloat, emptyString)
}

// useful commands go doc fmt.FUNCTION go doc time.Now etc
