
Thanks to Arpan Dhatt for doing most of the work on this (his blog here: [https://arpan.one/posts/messing-with-gradescope/](https://arpan.one/posts/messing-with-gradescope/))

At the end, he made this comment:
>And so, that's the end of this post. To whom it may concern, don't try doing your C assignment in C# (you know who you are).

The reason for this comment (besides the fact that I talk about C# a lot) is due to the fact that C# requires a runtime to be installed for it to work. This is because C# does not compile to native bytecode but rather compiles to an intermediary language (dubbed CIL by Microsoft) and is then translated 'Just In Time' by the runtime. 

This makes running assignments in a docker container where the runtime is not already installed considerably hard. One option we have is that we could just include the runtime in our submission. Sounds easy, right? Well it would be non-trivial to do but due to the fact that the .NET runtime is very large, I wouldn't consider this a good idea (Not to mention it's super boring). 

The better solution is to use .NET's (experimental) AOT compilation feature (formerly called CoreRT). C# has had a number of attempts at an AOT compiler such as :

 - [AOT](https://www.mono-project.com/docs/advanced/aot/) by Mono
 - LLD2CPP built by Unity
 - [Ready2Run](https://docs.microsoft.com/en-us/dotnet/core/deploying/ready-to-run) by Microsoft

We'll be using the official Ready2Run AOT compilation built by Microsoft. In order to use it, all you have to do is add the following to your `nuget.config`:
```xml
<add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />  
```
and then install the package: `Microsoft.DotNet.ILCompiler`. After doing that if you run the command: `dotnet publish -r [Runtime] -c [Config]` and after waiting a considerable amount of time, you'll have a full-fledged C# application compiled directly to your target runtime's bytecode!

Compiling my simple Hello, Wold test to linux-x64 (`dotnet publish -r linux-x64 -c Release`) and adding it to my project files should let me run it using the same method Arpan used in his blog.

After doing that, we can follow the instructions followed by Arpan and viola! C# runs on Gradescope!

I don't recommend this but it was fun to do and I needed stuff to write in a blog. 

## Other Interesting (Low Level) C#/.NET Features

C# actually has many lower level features people don't expect it to have. Some of these include pointers and direct memory management. Pointers can be enabled by encasing your code in an unsafe code block.

Example (Written by [Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code))
```csharp

// Normal pointer to an object.
int[] a = new int[5] { 10, 20, 30, 40, 50 };
// Must be in unsafe code to use interior pointers.
unsafe
{
    // Must pin object on heap so that it doesn't move while using interior pointers.
    fixed (int* p = &a[0])
    {
        // p is pinned as well as object, so create another pointer to show incrementing it.
        int* p2 = p;
        Console.WriteLine(*p2);
        // Incrementing p2 bumps the pointer by four bytes due to its type ...
        p2 += 1;
        Console.WriteLine(*p2);
        p2 += 1;
        Console.WriteLine(*p2);
        Console.WriteLine("--------");
        Console.WriteLine(*p);
        // Dereferencing p and incrementing changes the value of a[0] ...
        *p += 1;
        Console.WriteLine(*p);
        *p += 1;
        Console.WriteLine(*p);
    }
}
```

In .NET 6, the `NativeMemory` class was introduced which you can read about [here](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.nativememory.alloc?view=net-6.0). It allows for malloc-like memory allocation and freeing which can be important for high-performance workloads.
