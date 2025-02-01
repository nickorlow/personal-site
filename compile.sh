#!/bin/bash

# Check if the src directory exists
if [ ! -d "src" ]; then
    echo "Error: 'src' directory not found."
    exit 1
fi

# Create the out directory if it doesn't exist
mkdir -p "out"

# Define the template file and search pattern
template_file="src/structure.template.html"
filler_pattern="src/**/*.filler.html"

# Function to process the filler file and insert its content into the structure file
process_filler_file() {
    local filler_file="$1"
    local output_file="$2"

    # Read the contents of the template file
    template_content=$(<"$template_file")

    # Read the contents of the filler file
    filler_content=$(<"$filler_file")
    filler_content=$(echo "$filler_content" | sed "s/\&/\\\&/g")

    # Replace "{{ body_area }}" in the template with filler content
    modified_content="${template_content/\{\{ body_area \}\}/$filler_content}"

    # Write the modified content to the output file in the 'out' directory
    echo "$modified_content" > "out/$output_file"

    echo "Created: out/$output_file"
}

# Loop through each filler file in the src directory and its subdirectories
shopt -s globstar
for filler_file in $filler_pattern; do
    # Check if the filler file exists
    if [ ! -e "$filler_file" ]; then
        echo "Error: $filler_file not found."
        exit 1
    fi

    # Get the relative path of the filler file (removing the "src/" prefix)
    relative_path="${filler_file#src/}"

    # Extract the filename (excluding the extension)
    filename="${relative_path%.filler.html}"

    # Create the output file name in the 'out' directory
    output_file="${filename}.html"

    # Process the filler file and insert its content into the structure file
    process_filler_file "$filler_file" "$output_file"
done
