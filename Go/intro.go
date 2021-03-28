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
}

// useful commands go doc fmt.FUNCTION go doc time.Now etc
