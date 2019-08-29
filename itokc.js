// https://eastmanreference.com/complete-list-of-applescript-key-codes

var macKeyCodes = [];

function anything()
{
	var a = arrayfromargs(arguments);
	post("received list " + a + "\n");	
	itomac(a);	
}

function itomac(keycodes)
{
	for(i = 0; i < keycodes.length; i++)
	{
		switch(keycodes[i])
		{
			case 53:
				macKeyCodes.push("esc");
				break;
			case 122:
				macKeyCodes.push("f1");
				break;
			case 107:
				macKeyCodes.push("f1");
				break;
			case 120:
				macKeyCodes.push("f2");
				break;
			case 113:
				macKeyCodes.push("f2");
				break;
			case 160:
				macKeyCodes.push("f3");
				break;
			case 99:
				macKeyCodes.push("f3");
				break;
			case 131:
				macKeyCodes.push("f4");
				break;
			case 118:
				macKeyCodes.push("f4");
				break;
			case 96:
				macKeyCodes.push("f5");
				break;
			case 97:
				macKeyCodes.push("f6");
				break;
			case 98:
				macKeyCodes.push("f7");
				break;
			case 100:
				macKeyCodes.push("f8");
				break;
			case 101:
				macKeyCodes.push("f9");
				break;
			case 109:
				macKeyCodes.push("f10");
				break;
			case 103:
				macKeyCodes.push("f11");
				break;
			case 111:
				macKeyCodes.push("f12");
				break;
			case 50:
				macKeyCodes.push("`");
				break;
			case 18:
				macKeyCodes.push("1");
				break;
			case 19:
				macKeyCodes.push("2");
				break;
			case 20:
				macKeyCodes.push("3");
				break;
			case 21:
				macKeyCodes.push("4");
				break;
			case 23:
				macKeyCodes.push("5");
				break;
			case 22:
				macKeyCodes.push("6");
				break;	
			case 26:
				macKeyCodes.push("7");
				break;
			case 28:
				macKeyCodes.push("8");
				break;
			case 25:
				macKeyCodes.push("9");
				break;
			case 29:
				macKeyCodes.push("0");
				break;
			case 27:
				macKeyCodes.push("-");
				break;
			case 24:
				macKeyCodes.push("=");
				break;
			case 51:
				macKeyCodes.push("delete");
				break;
			case 48:
				macKeyCodes.push("tab");
				break;
			case 12:
				macKeyCodes.push("q");
				break;
			case 13:
				macKeyCodes.push("w");
				break;
			case 14:
				macKeyCodes.push("e");
				break;
			case 15:
				macKeyCodes.push("r");
				break;
			case 17:
				macKeyCodes.push("t");
				break;
			case 16:
				macKeyCodes.push("y");
				break;
			case 32:
				macKeyCodes.push("u");
				break;
			case 34:
				macKeyCodes.push("i");
				break;
			case 31:
				macKeyCodes.push("o");
				break;
			case 35:
				macKeyCodes.push("p");
				break;
			case 33:
				macKeyCodes.push("[");
				break;
			case 30:
				macKeyCodes.push("]");
				break;
			case 42:
				macKeyCodes.push("\\");
				break;
			case 57:
				macKeyCodes.push("capslock // left_shift");
				break;
			case 0:
				macKeyCodes.push("a");
				break;
			case 1:
				macKeyCodes.push("s");
				break;
			case 2:
				macKeyCodes.push("d");
				break;
			case 3:
				macKeyCodes.push("f");
				break;
			case 5:
				macKeyCodes.push("g");
				break;
			case 4:
				macKeyCodes.push("h");
				break;
			case 38:
				macKeyCodes.push("j");
				break;
			case 40:
				macKeyCodes.push("k");
				break;
			case 37:
				macKeyCodes.push("l");
				break;
			case 41:
				macKeyCodes.push(";");
				break;
			case 39:
				macKeyCodes.push("'");
				break;
			case 76:
				macKeyCodes.push("enter");
				break;
			case 36:
				macKeyCodes.push("return");
				break;
			case 6:
				macKeyCodes.push("z");
				break;
			case 7:
				macKeyCodes.push("x");
				break;
			case 8:
				macKeyCodes.push("c");
				break;
			case 9:
				macKeyCodes.push("v");
				break;
			case 11:
				macKeyCodes.push("b");
				break;
			case 45:
				macKeyCodes.push("n");
				break;
			case 46:
				macKeyCodes.push("m");
				break;
			case 43:
				macKeyCodes.push(",");
				break;
			case 47:
				macKeyCodes.push(".");
				break;
			case 44:
				macKeyCodes.push("/");
				break;
			case 60:
				macKeyCodes.push("right_shift");
				break;
			case 63:
				macKeyCodes.push("fn");
				break;
			case 59:
				macKeyCodes.push("ctrl");
				break;
			case 58:
				macKeyCodes.push("left_option");
				break;
			case 55:
				macKeyCodes.push("command");
				break;
			case 49:
				macKeyCodes.push(" ");
				break;
			case 61:
				macKeyCodes.push("right_option");
				break;
			case 123:
				macKeyCodes.push("LEFT");
				break;
			case 126:
				macKeyCodes.push("UP");
				break;
			case 124:
				macKeyCodes.push("RIGHT");
				break;
			case 125:
				macKeyCodes.push("DOWN");
				break;
		}
	}
	post("mac kcs: " + macKeyCodes + "\n");
	macKeyCodes = [];	
}
	
